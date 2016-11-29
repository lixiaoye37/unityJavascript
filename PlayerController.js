var speed : float;
function FixedUpdate () {
	var moveHorizontal = Input.GetAxis("Horizontal");
	var moveVertical = Input.GetAxis("Vertical");

	var movement = Vector3(moveHorizontal, 0.0f, moveVertical);

	GetComponent.<Rigidbody>().AddForce(movement * speed);
}
	GetComponent.<Rigidbody>().AddForce(movement)
