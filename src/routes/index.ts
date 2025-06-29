import { travelPosts } from '../types/travelPosts';

export function setRoutes(app: any) {
    app.get('/', (req: any, res: any) => {
        res.render('index', { title: 'Travel Blog', posts: travelPosts });
    });

    app.get('/post/:id', (req: any, res: any) => {
        const post = travelPosts.find(p => p.id === parseInt(req.params.id));
        if (!post) {
            return res.status(404).send('Post not found');
        }
        res.render('post', { title: post.title, post });
    });
}