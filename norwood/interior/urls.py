from django.urls import path
from . import views

app_name = 'interior'

urlpatterns = [
    path('', views.home, name='home'),
]
