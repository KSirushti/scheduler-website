from django.urls import path
from .views import MoodLogCreateView

urlpatterns = [
    path('mood/', MoodLogCreateView.as_view(), name='mood-create'),
]
