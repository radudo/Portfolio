using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Umbraco.Web.Mvc;
using Portfolio_Up.Models;
using System.Net.Mail;
using Umbraco.Core.Models;

namespace Portfolio_Up.Controllers
{
    public class ContactSurfaceController : SurfaceController
    {
        public const string PARTIAL_VIEW_FOLDER = "~/Views/Partials/Contact/";
        public ActionResult RenderForm()
        {
            return PartialView(PARTIAL_VIEW_FOLDER + "_Contact.cshtml");
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult SubmitForm(Contact model)
        {
            if (ModelState.IsValid)
            {
                SendEmail(model);
                TempData["ContactSuccess"] = true;
                return RedirectToCurrentUmbracoPage();
            }
            return CurrentUmbracoPage();
        }

        private void SendEmail(Contact model)
        {
            MailMessage message = new MailMessage(model.Email, "contact@radudo.com");
            message.Subject = model.Subject;
            message.Body = model.Message;
            SmtpClient client = new SmtpClient("webmail.radudo.com", 25);
            client.Send(message);
        }

    }


    }
