from django.conf import settings
from django.db import models

CATEGORY_CHOICES = (
    ('FK', 'fix kit'),
    ('L', 'lipstick'),
    ('LP', 'lip plumper'),
    ('EP', 'eyeshadow primer'),
    ('E', 'eyeliner'),
    ('CC', 'complete concealer'),
    ('FO', 'face oil'),
    ('FP', 'face primer'),
    ('BC', 'brow colour'),
    ('SG', 'shaping gel'),
    ('PP', 'pomade pencil')
)

LABEL_CHOICES = (
    ('S', 'sale'),
    ('D', 'Discount')
)


class Item(models.Model):
    title = models.CharField(max_length=100)
    price = models.FloatField()
    category = models.CharField(choices=CATEGORY_CHOICES, max_length=2)
    label = models.CharField(choices=LABEL_CHOICES, max_length=1)
    description = models.TextField(verbose_name='Description', null=True)
    description_bottom = models.TextField(
        verbose_name='Description_bottom', null=True)
    reviews = models.TextField(verbose_name='Reviews', null=True)

    def __str__(self):
        return self.title


class OrderItem(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class Order(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE)
    items = models.ManyToManyField(OrderItem)
    start_date = models.DateTimeField(auto_now_add=True)
    ordered_date = models.DateTimeField()
    ordered = models.BooleanField(default=False)

    def __str__(self):
        return self.user.username
