from django.urls import path
from .views import TaskListCreateView, MoodLogListCreateView

urlpatterns = [
    path('tasks/', TaskListCreateView.as_view(), name='task-list-create'),
    path('moodlogs/', MoodLogListCreateView.as_view(), name='moodlog-list-create'),
]
