from django.urls import path
from .views import item_list
from . import views

app_name = 'core'

urlpatterns = [
    path('', item_list, name='item-list'),
    path('services/', views.services, name="services"),
    path('about_us/', views.about_us, name="about_us"),
    path('appointment/', views.appointment, name="appointment"),
    path('single-product/', views.single_product, name="single-product"),
    path('single-service/', views.single_service, name="single-service")
]
