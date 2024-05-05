
import { authMiddleware } from "@clerk/nextjs/server";
export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};


export default authMiddleware({
    publicRoutes: ["/api/webhooks/clerk"],
})