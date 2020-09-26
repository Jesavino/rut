from django.db import models

# Create your models here.
class RutPlant(models.Model):
    name = models.CharField(max_length=80)
    description = models.TextField()
    moistureLevel = models.IntegerField()

    def _str_(self):
        return self.name
