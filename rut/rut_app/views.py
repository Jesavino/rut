from django.shortcuts import render
from rest_framework import viewsets
from .serializers import RutSerializer
from .models import RutPlant

class PlantView(viewsets.ModelViewSet):
    serializer_class = RutSerializer
    queryset = RutPlant.objects.all()