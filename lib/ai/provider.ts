export function getAIConfig(){return {provider:process.env.AI_PROVIDER||'mock',configured:Boolean(process.env.AI_API_KEY)}}
export async function answerEducationalQuestion(message:string){return `پاسخ آزمایشی همراه تحصیلی: سؤال شما درباره «${message.slice(0,80)}» دریافت شد. در نسخه متصل به AI، پاسخ آموزشی مرحله‌به‌مرحله از طریق API سمت سرور تولید می‌شود.`}
