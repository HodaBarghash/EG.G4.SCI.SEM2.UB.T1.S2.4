function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6dtOCchnX7p":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbzFnjhm3nGCGdUx4gzgKGDS3vNC_kzqb1RFJiJ6fDg0Ks_z_b0BTnPgDw5dxqu5jOzd/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

