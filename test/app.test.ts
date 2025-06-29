import request from 'supertest';
import { app } from '../src/app';
import { travelPosts } from '../src/types/travelPosts';

describe('GET /', () => {
    it('should respond with status 200 and render the travel blog home page', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toContain('Travel Blog');
        for (const post of travelPosts) {
            expect(response.text).toContain(post.title);
            expect(response.text).toContain(post.location);
        }
    });
});

describe('GET /post/:id', () => {
    it('should render the individual travel post page', async () => {
        const post = travelPosts[0];
        const response = await request(app).get(`/post/${post.id}`);
        expect(response.status).toBe(200);
        expect(response.text).toContain(post.title);
        expect(response.text).toContain(post.location);
        expect(response.text).toContain(post.content);
    });

    it('should return 404 for a non-existent post', async () => {
        const response = await request(app).get('/post/9999');
        expect(response.status).toBe(404);
        expect(response.text).toContain('Post not found');
    });
});