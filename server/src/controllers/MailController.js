require("dotenv").config();
const send = require("../services/nodemailer");

module.exports = {
  async sendMail(request) {
    const { subject, productId, contact, description, type, priority } = request;

    const to = [process.env.MAIL_FROM, contact];

    const supportHTML = `
      <!doctype html>
      <html>
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=3DUTF-8">
        </head>
        <body style="font-family: sans-serif;">
          <div style="display: block; margin: auto; max-width: 600px;" class="main">
            <img alt="Banner do e-mail" src="https://cdn.pixabay.com/photo/2021/01/29/10/55/back-to-school-5960645_960_720.jpg" style="width: 100%; height: 70px; object-fit: cover;">
            <h1 style="font-size: 20px; font-weight: bold; margin-top: 20px">Abertura de chamado - ${subject}</h1>
            <p>ID do Produto: ${productId}</p>
            <h2 style="font-size: 18px; font-weight: bold; margin-top: 15px">Detalhes do chamado:</h2>
            <p style="text-align: justify;">Descrição: ${description}</p>
            <p>Tipo: ${type}</p>
            <p>Prioridade: ${priority}</p>
            <p>Contato: ${contact}</p>
          </div>
        </body>
      </html>
    `;

    const clientHTML = `
    <!doctype html>
    <html>
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=3DUTF-8">
      </head>
      <body style="font-family: sans-serif;">
        <div style="display: block; margin: auto; max-width: 600px;" class="main">
        <img alt="Banner do e-mail" src="https://cdn.pixabay.com/photo/2021/01/29/10/55/back-to-school-5960645_960_720.jpg" style="width: 100%; height: 70px; object-fit: cover;">
          <h1 style="font-size: 20px; font-weight: bold; margin-top: 20px">Confirmação de abertura de chamado - ${subject}</h1>
        
          <h2 style="font-size: 18px; font-weight: bold; margin-top: 15px"></h2>            
          <p style="text-align: justify;">
          Agradecemos por entrar em contato conosco para solicitar suporte de manutenção e reposição de material escolar. Este e-mail é para confirmar a abertura do seu chamado, que foi registrado com sucesso em nosso sistema.
          </p>
          <br/>
          <h2 style="font-size: 18px; font-weight: bold; margin-top: 15px">Detalhes do chamado:</h2>
          <p>ID do Produto: ${productId}</p>
          <p style="text-align: justify;">Descrição: ${description}</p>
          <p>Tipo: ${type}</p>
          <p>Prioridade: ${priority}</p>
  
          <br/>
          <p style="text-align: justify;">
          Nossa equipe de suporte já está ciente do seu pedido e trabalhará diligentemente para resolver sua questão no menor tempo possível. Caso haja alguma informação adicional que você gostaria de fornecer ou se surgir qualquer dúvida durante o processo, não hesite em nos contatar diretamente respondendo a este e-mail.
          </p>
          <p style="text-align: justify;">
          Agradecemos pela sua paciência e compreensão enquanto trabalhamos para atender às suas necessidades. Estamos comprometidos em fornecer o melhor serviço possível.
          </p>  
        </div>
      </body>
    </html>
    `;

    const support = await send(to[0], subject, supportHTML);
    const client = await send(to[1], subject, clientHTML);

    return { support: support.messageId, client: client.messageId };
  },
};
