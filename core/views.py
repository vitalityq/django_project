from django.shortcuts import render
from .models import Item, Testimonial, Specialist
from django.views.generic import ListView, DetailView, View


def home(request):
    testimonials = Testimonial.objects.all()

    content = {"testimonials": testimonials}
    return render(request, "home.html", content)


def about(request):
    testimonials = Testimonial.objects.all()
    specialists = Specialist.objects.all()

    content = {"testimonials": testimonials, "specialists": specialists}
    return render(request, "about_us.html", content)


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


class ShopView(ListView):
    model = Item
    template_name = "shop.html"


def shop(request):
    context = {
        'items': Item.objects.all()
    }
    return render(request, "shop.html", context)
