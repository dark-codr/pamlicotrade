import json
import datetime

from django.utils import timezone
from django.conf import settings
from django.contrib.auth import get_user_model
from django.contrib.sites.shortcuts import get_current_site
from django.utils.functional import SimpleLazyObject
from django.urls import reverse
from countries_plus.models import Country
from dan.users.models import FAQ, Addresses, Currency, SmartsUpp, Testimonials, Wallet

from dan.utils.logger import LOGGER

User = get_user_model()

dt = datetime.datetime.now()

def context_settings(request):

    if dt.hour >= 4 and dt.hour < 12:
        greeting = "Good Morning"
        sleep = False
    elif dt.hour >= 12 and dt.hour < 17:
        greeting = "Good Afternoon"
        sleep = False
    elif dt.hour >= 17 and dt.hour < 22:
        greeting = "Good Evening"
        sleep = False
    elif dt.hour >= 22 and dt.hour < 4:
        greeting = "Good Night"
        sleep = True
    else:
        greeting = "Welcome"
        sleep = False

    active_smartsupp = SmartsUpp.objects.filter(active=True).first()
    if request.user.is_authenticated:
        wallet = Wallet.objects.filter(user=request.user).first()
    else:
        wallet = None

    btcprice = Currency.objects.get(name="BTC")
    ethprice = Currency.objects.get(name="ETH")
    ltcprice = Currency.objects.get(name="LTC")
    usdtprice = Currency.objects.get(name="USDT")
    usrbtc = wallet.btc if wallet != None else 0
    usreth = wallet.eth if wallet != None else 0
    usrusdt = wallet.usdt if wallet != None else 0

    faqs = FAQ.objects.all()[:10]
    testimonials = Testimonials.objects.filter(active=True)[:12]

    return {
        "ACCOUNT_ALLOW_REGISTRATION": settings.ACCOUNT_ALLOW_REGISTRATION,
        # "APPLICATION_SERVER_KEY": settings.PUSH_NOTIFICATIONS_SETTINGS['APP_SERVER_KEY'],
        "DEBUG": settings.DEBUG,
        "settings": settings,

        'btcprice': (usrbtc / btcprice.amount) if btcprice and usrbtc > 0.00 else 0.00,
        'ethprice': (usreth / ethprice.amount) if ethprice and usreth > 0.00 else 0.00,
        'ltcprice': ltcprice if ltcprice else 0.00,
        'usdtprice': (usrusdt / usdtprice.amount) if usdtprice and usrusdt > 0.00 else 0.00,

        # Smartsupp
        'smartsup':active_smartsupp,

        # Time greeting
        'greeting': greeting,
        'sleep_time': sleep,
        'countries': Country.objects.all(),

        'site': SimpleLazyObject(lambda: get_current_site(request)) if not settings.DEBUG else "localhost:8000",
    }
