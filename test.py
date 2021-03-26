import pytest

from app import app

@pytest.fixture
def client():
    with app.test_client() as client:
        yield client

def test_static_html(client):
    """
    Serves the static html page and the root path
    """
    response = client.get('/')
    assert response.status == "200 OK"
    assert b'<title>Single-Page Login and Post</title>' in response.data