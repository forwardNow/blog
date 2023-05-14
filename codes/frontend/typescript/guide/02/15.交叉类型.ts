interface Person { name: string }
interface Contact { phone: string }

type PersonDetail = Person & Contact;

let p: PersonDetail = {
  name: '张三',
  phone: '123'
}
