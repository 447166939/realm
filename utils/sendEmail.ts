import axios from 'axios';
/* const API_KEY='c65f273becf49da945fb060b0ee98a80e459105b896ad3eac689cecad2e6c176'
export async function createInbox() {
    return await axios
    .post(`https://api.mailslurp.com/createInbox?apiKey=${API_KEY}`)
}
export async function sendEmail({name,familyName,email,tel}:any) {
  const inbox1=await createInbox()
  const inbox2=await createInbox()
  console.log('inbox1',inbox1)
  console.log('inbox2',inbox2)
    await axios({
        method: 'post',
        url: `https://api.mailslurp.com/sendEmail?apiKey=${API_KEY}`,
        data: {
          senderId: inbox1.data.id,
          to: inbox2.data.emailAddress,
          subject: 'Contact us',
          body: `姓名：${familyName}${name}\nEmail:${email}\ntelephone:${tel}\n`
        } 
      });
    
}
export async function receive(inbox:any) {
    const email = await axios
      .get(`https://api.mailslurp.com/waitForLatestEmail?apiKey=${API_KEY}&inboxId=${inbox.id}`)
    
} */
//https://formsubmit.co/
export const send = async ({ name, familyName, email, tel }: any) => {
  const data = new FormData();
  data.append('姓名', `${familyName}${name}`);
  data.append('邮箱', email);
  data.append('电话', tel);
  data.append('_captcha', 'false');
  await axios({
    method: 'post',
    url: `https://formsubmit.co/jianseneasy@gmail.com`,
    data,
  });
};
