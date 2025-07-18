# Generated by Django 5.2.4 on 2025-07-05 03:46

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Task",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(max_length=200)),
                ("description", models.TextField()),
                ("date", models.DateField()),
                ("status", models.CharField(max_length=50)),
                ("video", models.FileField(upload_to="videos/")),
            ],
        ),
    ]
