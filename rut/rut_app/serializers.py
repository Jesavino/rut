from rest_framework import serializers

from .models import RutPlant

class RutSerializer(serializers.ModelSerializer):
    class Meta:
        model = RutPlant
        fields = ('id', 'name', 'description', 'moistureLevel')