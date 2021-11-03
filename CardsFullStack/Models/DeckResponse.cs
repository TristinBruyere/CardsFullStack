using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CardsFullStack.Models
{ // This class gets a response from the API
    public class DeckResponse
    {
        public string deck_id { get; set; }
        public int remaining { get; set; }

    }
}
