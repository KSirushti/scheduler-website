from django.urls import path
from .views import MoodLogView

urlpatterns = [
    path('mood/', MoodLogView.as_view(), name='mood-entry'),
]
