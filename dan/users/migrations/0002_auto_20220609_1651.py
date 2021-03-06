# Generated by Django 3.2.12 on 2022-06-09 20:51

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import model_utils.fields
import stdimage.models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Addresses',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', model_utils.fields.AutoCreatedField(default=django.utils.timezone.now, editable=False, verbose_name='created')),
                ('modified', model_utils.fields.AutoLastModifiedField(default=django.utils.timezone.now, editable=False, verbose_name='modified')),
                ('currency', models.CharField(choices=[('BTC', 'BTC'), ('ETH', 'ETH')], default='BTC', max_length=16)),
                ('wallet', models.CharField(blank=True, max_length=250)),
                ('active', models.BooleanField(default=True)),
            ],
            options={
                'verbose_name': 'Wallet Address',
                'verbose_name_plural': 'Wallet Addresses',
                'ordering': ['-modified'],
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='FAQ',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', model_utils.fields.AutoCreatedField(default=django.utils.timezone.now, editable=False, verbose_name='created')),
                ('modified', model_utils.fields.AutoLastModifiedField(default=django.utils.timezone.now, editable=False, verbose_name='modified')),
                ('question', models.CharField(max_length=700)),
                ('answer', models.TextField(verbose_name='Answer')),
            ],
            options={
                'verbose_name': 'FAQ',
                'verbose_name_plural': 'FAQs',
                'ordering': ['-created'],
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='TradeOpen',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', model_utils.fields.AutoCreatedField(default=django.utils.timezone.now, editable=False, verbose_name='created')),
                ('modified', model_utils.fields.AutoLastModifiedField(default=django.utils.timezone.now, editable=False, verbose_name='modified')),
                ('open', models.BooleanField(default=True)),
            ],
            options={
                'verbose_name': 'Trade Week Open/Close',
                'verbose_name_plural': 'Trade Week Open/Close',
                'managed': True,
            },
        ),
        migrations.AddField(
            model_name='user',
            name='bonus',
            field=models.DecimalField(decimal_places=2, default=0.0, max_digits=20),
        ),
        migrations.AddField(
            model_name='user',
            name='btc_address',
            field=models.CharField(blank=True, max_length=250),
        ),
        migrations.AddField(
            model_name='user',
            name='can_topup',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='user',
            name='can_withdraw',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='user',
            name='can_withdraw_roi',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='user',
            name='eth_address',
            field=models.CharField(blank=True, max_length=250),
        ),
        migrations.AddField(
            model_name='user',
            name='first_investment',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='user',
            name='first_name',
            field=models.CharField(blank=True, max_length=150, verbose_name='first name'),
        ),
        migrations.AddField(
            model_name='user',
            name='has_invested',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='user',
            name='has_toped',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='user',
            name='last_name',
            field=models.CharField(blank=True, max_length=150, verbose_name='last name'),
        ),
        migrations.AddField(
            model_name='user',
            name='phone',
            field=models.CharField(blank=True, help_text='eg: 018276475673', max_length=17),
        ),
        migrations.AddField(
            model_name='user',
            name='recommended_by',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='ref_by', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='user',
            name='roi',
            field=models.DecimalField(decimal_places=2, default=0.0, max_digits=20),
        ),
        migrations.AlterField(
            model_name='user',
            name='name',
            field=models.CharField(blank=True, max_length=255, verbose_name='Middel Name'),
        ),
        migrations.CreateModel(
            name='Withdraw',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', model_utils.fields.AutoCreatedField(default=django.utils.timezone.now, editable=False, verbose_name='created')),
                ('modified', model_utils.fields.AutoLastModifiedField(default=django.utils.timezone.now, editable=False, verbose_name='modified')),
                ('currency', models.CharField(choices=[('BTC', 'BTC'), ('ETH', 'ETH')], default='BTC', max_length=16)),
                ('status', models.CharField(choices=[('PENDING', 'PENDING'), ('FAILED', 'FAILED'), ('SUCCESS', 'SUCCESS')], default='PENDING', max_length=15)),
                ('wallet', models.CharField(blank=True, max_length=250)),
                ('amount', models.DecimalField(decimal_places=7, default=0.0, max_digits=20)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='withraw', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Withdraw History',
                'verbose_name_plural': 'Withdraw Histories',
                'ordering': ['-created'],
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Wallet',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', model_utils.fields.AutoCreatedField(default=django.utils.timezone.now, editable=False, verbose_name='created')),
                ('modified', model_utils.fields.AutoLastModifiedField(default=django.utils.timezone.now, editable=False, verbose_name='modified')),
                ('btc', models.DecimalField(decimal_places=7, default=0.0, max_digits=20)),
                ('eth', models.DecimalField(decimal_places=7, default=0.0, max_digits=20)),
                ('invested_date', models.DateField(blank=True, null=True)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='wallet', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'User Wallet',
                'verbose_name_plural': 'User Wallets',
                'ordering': ['-created'],
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='TransactionHistory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', model_utils.fields.AutoCreatedField(default=django.utils.timezone.now, editable=False, verbose_name='created')),
                ('modified', model_utils.fields.AutoLastModifiedField(default=django.utils.timezone.now, editable=False, verbose_name='modified')),
                ('currency', models.CharField(choices=[('BTC', 'BTC'), ('ETH', 'ETH')], default='BTC', max_length=16)),
                ('transaction_type', models.CharField(choices=[('AFFILIATE', 'AFFILIATE'), ('DEPOSIT', 'DEPOSIT'), ('WITHDRAW', 'WITHDRAW'), ('ROI', 'ROI')], default='DEPOSIT', max_length=15)),
                ('status', models.CharField(choices=[('PENDING', 'PENDING'), ('FAILED', 'FAILED'), ('SUCCESS', 'SUCCESS')], default='PENDING', max_length=15)),
                ('amount', models.DecimalField(decimal_places=7, default=0.0, max_digits=20)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='transaction', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Transaction History',
                'verbose_name_plural': 'Transaction Histories',
                'ordering': ['-created'],
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='KYCVerify',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', model_utils.fields.AutoCreatedField(default=django.utils.timezone.now, editable=False, verbose_name='created')),
                ('modified', model_utils.fields.AutoLastModifiedField(default=django.utils.timezone.now, editable=False, verbose_name='modified')),
                ('pass_front', stdimage.models.StdImageField(blank=True, upload_to='passport/front')),
                ('pass_back', stdimage.models.StdImageField(blank=True, upload_to='passport/back')),
                ('approved', models.BooleanField(default=False)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='kyc', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'KYC Verification',
                'verbose_name_plural': 'KYC Verifications',
                'ordering': ['-created'],
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Deposit',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', model_utils.fields.AutoCreatedField(default=django.utils.timezone.now, editable=False, verbose_name='created')),
                ('modified', model_utils.fields.AutoLastModifiedField(default=django.utils.timezone.now, editable=False, verbose_name='modified')),
                ('currency', models.CharField(choices=[('BTC', 'BTC'), ('ETH', 'ETH')], default='BTC', max_length=16)),
                ('status', models.CharField(choices=[('PENDING', 'PENDING'), ('FAILED', 'FAILED'), ('SUCCESS', 'SUCCESS')], default='PENDING', max_length=15)),
                ('amount', models.DecimalField(decimal_places=7, default=0.0, max_digits=20)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='depsit', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Deposit History',
                'verbose_name_plural': 'Deposit Histories',
                'ordering': ['-created'],
                'managed': True,
            },
        ),
    ]
