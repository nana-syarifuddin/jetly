'use client';
import EditLink from './_edit-link';

export default function EditTautan({ params }: { params: { id: string } }) {
  const id = params.id;
  return (
    <div className="flex-1 h-screen p-10">
      <h1 className="text-2xl font-bold mb-11">Ubah Tautan Pendek</h1>
      <EditLink linkId={id} />
    </div>
  );
}
