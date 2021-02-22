from django.urls import path
from . import views
from .views import (
    ShopView
)


app_name = 'core'

urlpatterns = [
    path('', views.home, name='home'),
    path('services/', views.services, name="services"),
    path('about_us/', views.about, name="about_us"),
    path('appointment/', views.appointment, name="appointment"),
    path('single-product/', views.single_product, name="single-product"),
    path('single-service/', views.single_service, name="single-service"),
    path('shop/', ShopView.as_view(), name="shop")
]
