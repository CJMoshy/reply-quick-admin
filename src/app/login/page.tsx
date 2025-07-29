import { login } from './actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
export default function LoginPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                ReplyQuick Admin Dashboard
            </h2>
            <div className='mt-2 w-full max-w-sm'>
                <form className="flex flex-col gap-4 w-full max-w-sm">
                    <Input id="email" name="email" type="email" placeholder='Email' required />
                    <Input id="password" name="password" type="password" placeholder='Password' required />
                    <Button formAction={login}>Log in</Button>
                </form>
            </div>
        </div>

    )
}