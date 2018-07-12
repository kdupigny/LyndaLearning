using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Singleton
{
    public class Policy
    {
        public static Policy Instance
        {
            get
            {
                lock (_lock)
                {
                    return _instance ?? (_instance = new Policy());
                }
            }
        }

        public Policy()
        {
            
        }

        public string GetInsuredName() => Insured;
        
        private int Id { get; set; } = 123;
        private string Insured { get; set; } = "John Roy";

        private static readonly object _lock = new object();
        private static Policy _instance;

    }
}
