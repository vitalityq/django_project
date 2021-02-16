from django.urls import path
from .views import item_list
from . import views

app_name = 'core'

urlpatterns = [
    path('', item_list, name='item-list'),
    path('services/', views.services, name="services")
]
