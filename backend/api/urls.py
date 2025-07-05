from django.urls import path
from .views import MoodLogCreateView
from .views import TaskListCreateView

urlpatterns = [
path('api/', TaskListCreateView.as_view(), name='task-list'),
    path('mood/', MoodLogCreateView.as_view(), name='mood-create'),
]
