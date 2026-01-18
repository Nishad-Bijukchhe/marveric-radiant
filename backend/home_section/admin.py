from django.contrib import admin
from .models import SliderImage, Slider

class SliderImageInline(admin.TabularInline):
    model = SliderImage
    extra = 5  # Number of empty slots for uploading images

@admin.register(Slider)
class SliderAdmin(admin.ModelAdmin):
    inlines = [SliderImageInline]
    list_display = ("heading", "is_active")
