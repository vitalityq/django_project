from django.contrib import admin

from .models import Item, OrderItem, Order, Testimonial, Specialist


admin.site.register(Item)
admin.site.register(OrderItem)
admin.site.register(Order)
admin.site.register(Testimonial)
admin.site.register(Specialist)
