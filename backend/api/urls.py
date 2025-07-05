from django.urls import path
from .views import TaskListCreateView, MoodLogListCreateView

urlpatterns = [
    path('task/', TaskListCreateView.as_view(), name='task-list-create'),
    path('mood/', MoodLogListCreateView.as_view(), name='mood-log-create'),
]
