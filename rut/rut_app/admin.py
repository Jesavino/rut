from django.contrib import admin
from .models import RutPlant

# Register your models here.
class RutAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'moistureLevel')

admin.site.register(RutPlant, RutAdmin)