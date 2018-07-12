using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication3.Controllers
{
    public class DoctorWhoRandomPicker
    {
        public static string getDoctorWhoSaying()
        {
            long curTime = DateTime.Now.Ticks;
            if ((curTime & 1) == 0)
                return DoctorWhoData.item1();
            else
                return DoctorWhoData.item2();
        }
    }
}