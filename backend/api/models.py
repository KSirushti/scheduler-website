from django.db import models

class Task(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    date = models.DateField()
    status = models.CharField(max_length=50)
    video = models.FileField(upload_to='videos/')
