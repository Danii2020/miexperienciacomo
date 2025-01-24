'use client'

import Title from "@/app/components/Typography/Title";
import Input from "@/app/components/Input/Input";
import Switch from "@/app/components/Switch/Switch";
import { useAuth } from "@/app/context/AuthContext";
import { useState } from "react";

const OnboardingPage = () => {
    const { user, supabase } = useAuth()
    const [formData, setFormData] = useState({
        professional_role: '',
        experience_time: '',
        show_name: false,
        show_photo: false
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSwitchChange = (field: 'show_name' | 'show_photo') => {
        setFormData(prev => ({
            ...prev,
            [field]: !prev[field]
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const { error } = await supabase
                .from('users')
                .update({
                    professional_role: formData.professional_role,
                    experience_time: formData.experience_time,
                    show_name: formData.show_name,
                    show_photo: formData.show_photo
                })
                .eq('id', user?.id);

            if (error) throw error;
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    return (
        <main className="flex flex-col items-start justify-start py-8">
            <Title className="mb-16">
                Cuéntanos un poco más sobre ti
            </Title>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label
                        className="text-3xl font-semibold"
                        htmlFor="professional_role"
                    >
                        ¿Cuál es tu rol principal?
                    </label>
                    <Input
                        name="professional_role"
                        placeholder="Ejemplo: Desarrollador full stack"
                        className="text-xl mt-4"
                        value={formData.professional_role}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="text-3xl font-semibold"
                        htmlFor="experience_time"
                    >
                        ¿Cuánto tiempo de experiencia profesional tienes?
                    </label>
                    <Input
                        name="experience_time"
                        placeholder="Ejemplo: 2 años"
                        className="text-xl mt-4"
                        value={formData.experience_time}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-6">
                    <label className="text-3xl font-semibold mb-3">
                        ¿Quieres mostrar tu nombre y foto de perfil?
                    </label>
                    <div className="flex flex-row items-center gap-8 mt-6">
                        <div className="flex flex-col justify-center gap-4">
                            <span className="text-2xl font-medium">Foto de perfil</span>
                            <span className="text-2xl font-medium">Nombre</span>
                        </div>
                        <div className="flex flex-col items-center justify-between gap-7">
                            <Switch
                                checked={formData.show_photo}
                                onChange={() => handleSwitchChange("show_photo")}
                            />
                            <Switch
                                checked={formData.show_name}
                                onChange={() => handleSwitchChange("show_name")}
                            />
                        </div>
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-1/3 bg-black text-white py-2 px-4 rounded-xl hover:bg-gray-800 transition text-xl font-bold"
                >
                    Guardar
                </button>
            </form>
        </main>
    );
};

export default OnboardingPage;
