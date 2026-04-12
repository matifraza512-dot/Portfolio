from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from .models import Contact, Project, Post
from .serializers import ContactSerializer, ProjectSerializer, PostSerializer

@api_view(['POST'])
def contact_view(request):
    serializer = ContactSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Message sent!"}, status=201)
    return Response(serializer.errors, status=400)

@api_view(['GET'])
def project_list(request):
    projects = Project.objects.all().order_by('-created_at')
    return Response(ProjectSerializer(projects, many=True).data)

@api_view(['GET'])
def post_list(request):
    posts = Post.objects.filter(published=True).order_by('-created_at')
    return Response(PostSerializer(posts, many=True).data)

@api_view(['GET'])
def post_detail(request, pk):
    try:
        post = Post.objects.get(pk=pk, published=True)
    except Post.DoesNotExist:
        return Response(status=404)
    return Response(PostSerializer(post).data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def contact_list(request):
    contacts = Contact.objects.all().order_by('-created_at')
    return Response(ContactSerializer(contacts, many=True).data)