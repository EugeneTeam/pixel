import { ApplicationEntity } from '../application.entity';

export function createTextForTelegrafHelper(
  application: ApplicationEntity,
): string {
  return `❗️ *ЗАЯВКА* #${getId(application.id)}

🔸 *Имя*: ${application.name}
🔸 *Телефон*: \`${application.phone}\`
🔸 *Почта*: ${application.mail}
🔸 *Статус*: ${application.status}
    
📜 Текст сообщения
${application.message}
    `;
}

const NUMBERS = {
  '0': '0️⃣',
  '1': '1️⃣',
  '2': '2️⃣',
  '3': '3️⃣',
  '4': '4️⃣',
  '5': '5️⃣',
  '6': '6️⃣',
  '7': '7️⃣',
  '8': '8️⃣',
  '9': '9️⃣',
};

function getId(id: number) {
  const temp = id.toString().split('');
  let result = '';
  for (const l of temp) {
    result += NUMBERS[l];
  }
  return result;
}
