# Generated by Django 4.2.7 on 2023-12-12 13:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('GamingClientApp', '0003_cartinfo_user'),
    ]

    operations = [
        migrations.CreateModel(
            name='AdminInfo',
            fields=[
                ('AdminId', models.AutoField(primary_key=True, serialize=False)),
                ('AdminEmail', models.CharField(max_length=500)),
            ],
        ),
    ]