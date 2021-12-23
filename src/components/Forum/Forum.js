import Post from '../Post/Post';
function Forum() {
  const data = [
    {
      user: 'Vasia',
      title: 'Vasia post',
      body: ` Иногда для достижения целей приходится идти на разумные жертвы. Что
        если на этот раз кто-то решил пожертвовать мной?`,
      upvotes: 10,
      downvotes: 3,
    },
    {
      user: 'Petia',
      title: 'Petia post',
      body: ` Иногда для достижения целей приходится идти на разумные жертвы.`,
      upvotes: 40,
      downvotes: 3,
    },
    {
      user: 'Sasha',
      title: 'sasha post',
      body: ` Что если на этот раз кто-то решил пожертвовать мной?`,
      upvotes: 20,
      downvotes: 3,
    },
  ];

  return (
    <div>
        {data.map(item =>{ return <Post user={item.user} title={item.title} body={item.body} upvotes={item.upvotes} downvotes={item .downvotes} />})}
    </div>
  );
}
export default Forum;
