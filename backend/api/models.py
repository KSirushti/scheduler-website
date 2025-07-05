# api/models.py
from django.db import models

class MoodEntry(models.Model):
    MOOD_CHOICES = [
        ('happy', 'Happy'),
        ('sad', 'Sad'),
        ('satisfied', 'Satisfied'),
        ('okay', 'Okay'),
        ('excellent', 'Excellent'),
    ]

    date = models.DateField()
    mood = models.CharField(max_length=20, choices=MOOD_CHOICES)
    title = models.CharField(max_length=100)
    description = models.TextField()
    file = models.FileField(upload_to='moods/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.date} - {self.mood}"

class Task(models.Model):
    title = models.CharField(max_length=100)
    file = models.FileField(upload_to='uploads/')
    description = models.TextField(blank=True)
    date = models.DateField()
    media = models.FileField(upload_to='tasks/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

