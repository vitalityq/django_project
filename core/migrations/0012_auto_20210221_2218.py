# Generated by Django 3.1.5 on 2021-02-21 20:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0011_specialist'),
    ]

    operations = [
        migrations.RenameField(
            model_name='specialist',
            old_name='name',
            new_name='title',
        ),
    ]
