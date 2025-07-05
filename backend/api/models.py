from django.db import models

class Task(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    date = models.DateField()
    completed = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.title} ({'Done' if self.completed else 'Pending'})"


from django.db import models

class MoodLog(models.Model):
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
    file = models.FileField(upload_to='mood_entries/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.date} - {self.title}"

