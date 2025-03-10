import React, { useState } from 'react';
import TemplateModal from './TemplateModal';
import Title from '../Typography/Title';
import Button from '../Button/Button';
import Input from '../Input/Input';

interface URLInputModalProps {
    isOpen: boolean;
    onClose: () => void;
    handleInsert: (url: string) => void;
    type: string;
    placeholder?: string;
}

const URLInputModal = ({ isOpen, onClose, handleInsert, type, placeholder }: URLInputModalProps) => {
    const [url, setUrl] = useState<string>('');
    if (!isOpen) return null;

    return (
        <TemplateModal isOpen={isOpen} closeModal={onClose}>
            <Title className="text-center">
                Ingresa la URL de {type}
            </Title>
            <Input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder={placeholder || "URL..."}
                className="text-base font-normal"
                required
            />
            <div className="flex justify-end gap-2">
                <Button
                    type="button"
                    onClick={onClose}
                    className="bg-[#F40000]"
                >
                    Cancelar
                </Button>
                <Button
                    type="button"
                    onClick={() => handleInsert(url)}
                >
                    Insertar
                </Button>
            </div>
        </TemplateModal >
    );
};

export default URLInputModal;
