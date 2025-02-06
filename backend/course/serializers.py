from rest_framework import serializers
from .models import hackdata, feedback

class HackdataSerializer(serializers.ModelSerializer):
    class Meta:
        model = hackdata
        fields = ['email', 'password']

class phishingformSerializer(serializers.ModelSerializer):
    class Meta:
        model = feedback
        fields = ['name', 'company', 'phishing', 'message']