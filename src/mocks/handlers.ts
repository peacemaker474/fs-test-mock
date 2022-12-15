import localforage from 'localforage';
import { rest } from 'msw'
import { LoginPayload } from './types/user';

export const handlers = [
  rest.post('/login', async (req, res, ctx) => {
    const user: LoginPayload = await req.json();
    
    localforage.setItem('test', {
      'name': user.username,
    })

    return res(
      ctx.json({
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        username: user.username,
        firstName: 'John',
        lastName: 'Maverick',
      })
    )
  }),
]