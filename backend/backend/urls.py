from django.contrib import admin
from django.http import JsonResponse
from django.urls import path, include

urlpatterns = [
    path('', lambda request: JsonResponse({'message': 'Scheduler Backend API Running ✅'})),
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),  # Replace with your app name
]
