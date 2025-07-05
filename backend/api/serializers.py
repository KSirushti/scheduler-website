from rest_framework import serializers
from .models import Task, MoodLog

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'


class MoodLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = MoodLog
        fields = '__all__'
