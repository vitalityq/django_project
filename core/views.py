from django.shortcuts import render
from .models import Item


def item_list(request):
    context = {
        'items': Item.objects.all()
    }
    return render(request, "home.html", context)


def about_us(request):
    context = {}
    return render(request, "about-us.html", context)


def appointment(request):
    context = {}
    return render(request, "appointment.html", context)


def services(request):
    context = {}
    return render(request, "services.html", context)


def single_product(request):
    context = {}
    return render(request, "single-product.html", context)


def single_service(request):
    context = {}
    return render(request, "single-service.html", context)
