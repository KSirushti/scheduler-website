from django.urls import path
from .views import MoodLogListCreateView, TaskListCreateView
from .views import ping

urlpatterns = [
    path('task/', TaskListCreateView.as_view(), name='task-list-create'),
    path('mood/', MoodLogListCreateView.as_view(), name='mood-log-create'),
path('ping/', ping),
]
