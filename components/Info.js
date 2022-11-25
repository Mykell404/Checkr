import Button from "./Button";

export default function Info() {
  return (
    <div className="flex flex-wrap">
      <div className="container my-2 py-2">
        <h2 className="text-align-center font-bold">Checkr</h2>
        <p>
          The progressive way of storing medical information on the blockchain.
        </p>
        <p>The future of the web is here with Polygon and Checkr</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at nibh
          rhoncus, interdum velit vel, feugiat mi. Mauris porttitor sed urna
          quis sollicitudin. Quisque sed risus elit. Aenean bibendum libero ut
          urna malesuada, eget ornare sem mollis. Vestibulum tristique posuere
          orci, et maximus quam consectetur in. Integer tincidunt sollicitudin
          ante vel ullamcorper. Donec efficitur leo leo, et sodales mi commodo
          sed. Sed eget sapien dolor. Mauris tempor risus et turpis dictum
          scelerisque. Nam non dapibus purus, nec commodo sem. Nullam accumsan
          leo non feugiat aliquam.per.
        </p>
        <Button name="Try it out"></Button>
      </div>
    </div>
  );
}
