from django.db import models

class Task(models.Model):
    title = models.CharField(max_length=100)
    file = models.FileField(upload_to='uploads/')
    description = models.TextField(blank=True)
    date = models.DateField()
    media = models.FileField(upload_to='tasks/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
